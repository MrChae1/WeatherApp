import './sass/mainStyle.scss';


export const LandingPage = () => {
    const LPContainer = document.createElement('main');
    LPContainer.classList.add('LPContainer');
    const LPMain = document.createElement('div');
    LPMain.classList.add('LPMain');
    
    return LPContainer;
}