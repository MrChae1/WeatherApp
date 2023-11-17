import './sass/mainStyle.scss';


export const LandingPage = () => {
    const LPContainer = document.createElement('main');
    LPContainer.classList.add('LPContainer');
    const LPMain = document.createElement('div');
    LPMain.classList.add('LPMain');
    const LPHeader = document.createElement('header');
    LPHeader.innerHTML = `
        <section class="LPHead-Section">
            <svg class="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>store-marker</title><path d="M20 6H4V4H20V6M13 15.5C13 16.64 13.43 17.86 14 19V20H4V14H3V12L4 7H20L20.7 10.5C20 10.18 19.28 10 18.5 10C15.5 10 13 12.5 13 15.5M12 14H6V18H12V14M22 15.5C22 18.1 18.5 22 18.5 22S15 18.1 15 15.5C15 13.6 16.6 12 18.5 12S22 13.6 22 15.5M19.7 15.6C19.7 15 19.1 14.4 18.5 14.4S17.3 14.9 17.3 15.6C17.3 16.2 17.8 16.8 18.5 16.8S19.8 16.2 19.7 15.6Z" /></svg>
            <h1>NeighborHood Market</h1>
        </section>
        <nav class="LPMain-Nav">
            <div class="LPSub-Nav">
                <button class="Nav-BTN">HOME</button>
                <button class="Nav-BTN">ABOUT US</button>
                <button class="Nav-BTN">FEATURES</button>
                <button class="Nav-BTN">CONTACT US</button>
            </div>
            <div class="LPDirect-btn">
                <button class="LPLog-BTN">LOGIN</button>
                <button class="LPSign-BTN">SIGN-UP</button>
            </div>
        </nav>
        
    `;
    LPContainer.append(LPHeader);
    return LPContainer;
}
