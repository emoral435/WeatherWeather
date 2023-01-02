import './style.css';
import initialLoad from './modules/initialLoad';
import geolocator from './modules/geolocatorAPI';

console.log({test: 'This is running wepack and tailwind, but this time bundled correctly!'})

// try to load where the are first located at 
initialLoad()