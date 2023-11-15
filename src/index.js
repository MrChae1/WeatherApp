import './sass/mainStyle.scss';
import { LandingPage } from './displayTab';


function mainComponent(){
    const mainContainer = document.createElement('main');
    mainContainer.classList.add('mainContainer');
    mainContainer.append(LandingPage());
    return mainLanding
}

document.body.append(mainComponent());