import './sass/mainStyle.scss';
import { LandingPage } from './displayTab';


function mainComponent(){
    const mainContainer = document.createElement('main');
    mainContainer.classList.add('mainContainer');
    mainContainer.appendChild(LandingPage());
    return mainContainer
}

document.body.append(mainComponent());