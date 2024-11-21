const themeSelector = document.getElementById('theme-selector');
const listStyleSelector = document.getElementById('list-style-selector');
const dynamicList = document.getElementById('dynamic-list');

const listItems = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];


function populateList() {
  
  dynamicList.innerHTML = '';

  listItems.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    dynamicList.appendChild(li);
  });
}


function applyPreferences() {
 
  const storedTheme = localStorage.getItem('theme') || 'light';
  const storedListStyle = localStorage.getItem('listStyle') || 'none';

  document.body.classList.add(storedTheme);
  themeSelector.value = storedTheme;
  dynamicList.classList.add(storedListStyle);
  listStyleSelector.value = storedListStyle; 
}

function savePreferences() {
  const selectedTheme = themeSelector.value;
  const selectedListStyle = listStyleSelector.value;


  document.body.classList.remove('light', 'dark', 'blue');

  document.body.classList.add(selectedTheme);

 
  dynamicList.classList.remove('none', 'bullets', 'numbers');

  dynamicList.classList.add(selectedListStyle);


  localStorage.setItem('theme', selectedTheme);
  localStorage.setItem('listStyle', selectedListStyle);
}


themeSelector.addEventListener('change', savePreferences);
listStyleSelector.addEventListener('change', savePreferences);


populateList(); 
applyPreferences();
