# Re-create files with a safer templating approach (no accidental f-string formatting).
from datetime import date
import pandas as pd
from textwrap import dedent

# Benner years (editable)
hard_years = [1996, 2005, 2012, 2023, 2032, 2039, 2050, 2059]
good_years = [1999, 2007, 2016, 2026, 2034, 2043, 2053]
panic_years = [1999, 2019, 2035, 2053]

years = list(range(1990, 2060))
labels = []
for y in years:
    lab = []
    if y in hard_years:
        lab.append("Hard")
    if y in good_years:
        lab.append("Good")
    if y in panic_years:
        lab.append("Panic")
    labels.append(",".join(lab) if lab else "")

df = pd.DataFrame({"year": years, "label": labels})
csv_path = "/mnt/data/benner_calendar_1990_2059.csv"
df.to_csv(csv_path, index=False)

# Safe template with token replacement
template = dedent(
    """
# benner_playbook_template.py
# Purpose: Turn the Benner calendar into an exposure plan with simple, testable rules.
#
# 1 Edit the arrays below if you prefer a different reproduction of Benner's dates.
# 2 Choose your market proxy (e.g., SPY, NIFTYBEES) and your "defensive" proxy (e.g., TBills/LiquidBees).
# 3 Replace the placeholder signal functions with your real ones (breadth, credit spreads, term spread).
# 4 Generate a month-by-month target beta schedule and export to CSV.
#
# NOTE: This is a *framework*, not trading advice.

hard_years = <<HARD_YEARS>>
good_years = <<GOOD_YEARS>>
panic_years = <<PANIC_YEARS>>

from dataclasses import dataclass
from datetime import datetime
import pandas as pd

@dataclass
class ExposureRules:
    hard_beta: float = 1.15    # risk-on tilt in Hard Times recovery
    good_beta: float = 0.70    # de-risk into Good Times (sell/trim window)
    neutral_beta: float = 1.00
    panic_beta: float = 0.30   # pre-emptive hedge/de-risk

    # hedge overlays
    put_floor_pct: float = 0.10     # 10% OTM protective puts
    collar_call_otm: float = 0.10   # 10% OTM covered calls when de-risking
    vol_target: float = 0.12        # annualized portfolio vol target

# === Placeholder confirmation signals (replace with your real functions) ===
def breadth_ok(dt: datetime) -> bool:
    # e.g., Zweig Breadth Thrust status or A/D line uptrend
    return True

def credit_ok(dt: datetime) -> bool:
    # e.g., HY OAS below threshold / tightening in last 3 months
    return True

def term_spread_ok(dt: datetime) -> bool:
    # e.g., 10y-3m slope rising vs 6m ago
    return True

def benner_label(y: int) -> str:
    tags = []
    if y in hard_years:
        tags.append("Hard")
    if y in good_years:
        tags.append("Good")
    if y in panic_years:
        tags.append("Panic")
    return ",".join(tags) if tags else ""

def target_beta(dt: datetime, rules: ExposureRules) -> float:
    y = dt.year
    label = benner_label(y)
    # Base beta from calendar
    if "Panic" in label:
        base = rules.panic_beta
    elif "Good" in label:
        base = rules.good_beta
    elif "Hard" in label:
        base = rules.hard_beta
    else:
        base = rules.neutral_beta

    # Confirmation overlay
    confirms = sum([breadth_ok(dt), credit_ok(dt), term_spread_ok(dt)])
    if "Hard" in label:
        # Only lean in if at least 2/3 confirm
        if confirms >= 2:
            return base
        else:
            return rules.neutral_beta
    if "Good" in label or "Panic" in label:
        # If 2/3 confirm risk OFF, keep lower beta; else revert toward neutral
        if confirms >= 2:
            return base
        else:
            return (base + rules.neutral_beta) / 2.0
    return base

def monthly_schedule(start="2023-01-01", end="2036-12-31") -> pd.DataFrame:
    idx = pd.period_range(start=start, end=end, freq="M").to_timestamp("M")
    rules = ExposureRules()
    data = []
    for dt in idx:
        data.append({{
            "date": dt.date(),
            "year": dt.year,
            "benner_label": benner_label(dt.year),
            "target_beta": round(target_beta(dt, rules), 3),
            "put_floor": rules.put_floor_pct if ("Good" in benner_label(dt.year) or "Panic" in benner_label(dt.year)) else 0.0,
            "collar_calls": rules.collar_call_otm if ("Good" in benner_label(dt.year)) else 0.0
        }})
    return pd.DataFrame(data)

if __name__ == "__main__":
    sched = monthly_schedule("2023-01-01", "2036-12-31")
    out = "benner_monthly_schedule_2023_2036.csv"
    sched.to_csv(out, index=False)
    print(f"Wrote: {{out}}")
"""
).strip()

template = template.replace("<<HARD_YEARS>>", str(hard_years))
template = template.replace("<<GOOD_YEARS>>", str(good_years))
template = template.replace("<<PANIC_YEARS>>", str(panic_years))

py_path = "/mnt/data/benner_playbook_template.py"
with open(py_path, "w", encoding="utf-8") as f:
    f.write(template)

import caas_jupyter_tools as cj

cj.display_dataframe_to_user("Benner calendar (1990–2059)", df)

print(csv_path)
print(py_path)
