
        document.querySelectorAll('span').forEach(function(element){
            if(element.textContent.includes('Available for a service call')){
                const existingLi = [...(ul ? ul.querySelectorAll('li') : [])].some(li => li.textContent.includes('Available for a service call'));
                if (!existingLi) {
                    createAndAppendLi('Available for a service call');
                }
        
                // Add the hidetext class to the parent div of the first div containing the text
               const selectedElement = card.querySelector('.dn.m_db.mt2');
              const parentDiv = selectedElement ? selectedElement.closest('div') : null;
        
                if (parentDiv) {
                    parentDiv.classList.add('hidetext');
                }
            }
        })