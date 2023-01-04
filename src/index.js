import './style.css';
import initialLoad from './modules/initialLoad';
import changeBtn from './modules/changeSystem'; 
import search from './modules/searchQuery';

// try to load where the are first located at 
initialLoad()
// this lets the button be able to change to either the metric system or the imperial system
changeBtn()
// this lets the user use the input element to actually search for where they want to check the weather for!
search()

