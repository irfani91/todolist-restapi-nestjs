'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">belajar-nestjs documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-ab5027fcd1dddfbf2f286a1db7678a8e379260a399a27264815bcaf88224ccb0364ab30038d481ee94c905de388a79e1db0581866dca620f23414b50afebe2fb"' : 'data-bs-target="#xs-controllers-links-module-AppModule-ab5027fcd1dddfbf2f286a1db7678a8e379260a399a27264815bcaf88224ccb0364ab30038d481ee94c905de388a79e1db0581866dca620f23414b50afebe2fb"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-ab5027fcd1dddfbf2f286a1db7678a8e379260a399a27264815bcaf88224ccb0364ab30038d481ee94c905de388a79e1db0581866dca620f23414b50afebe2fb"' :
                                            'id="xs-controllers-links-module-AppModule-ab5027fcd1dddfbf2f286a1db7678a8e379260a399a27264815bcaf88224ccb0364ab30038d481ee94c905de388a79e1db0581866dca620f23414b50afebe2fb"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-ab5027fcd1dddfbf2f286a1db7678a8e379260a399a27264815bcaf88224ccb0364ab30038d481ee94c905de388a79e1db0581866dca620f23414b50afebe2fb"' : 'data-bs-target="#xs-injectables-links-module-AppModule-ab5027fcd1dddfbf2f286a1db7678a8e379260a399a27264815bcaf88224ccb0364ab30038d481ee94c905de388a79e1db0581866dca620f23414b50afebe2fb"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-ab5027fcd1dddfbf2f286a1db7678a8e379260a399a27264815bcaf88224ccb0364ab30038d481ee94c905de388a79e1db0581866dca620f23414b50afebe2fb"' :
                                        'id="xs-injectables-links-module-AppModule-ab5027fcd1dddfbf2f286a1db7678a8e379260a399a27264815bcaf88224ccb0364ab30038d481ee94c905de388a79e1db0581866dca620f23414b50afebe2fb"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-af0077cfbd6e94c025df07a4c5a1a4e8256c183a28ea2b6b0fc1454aed828ba1cada993038a65be34f7f7a68745a8728d1477e3491fc988a4b3ffeaae0f64d08"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-af0077cfbd6e94c025df07a4c5a1a4e8256c183a28ea2b6b0fc1454aed828ba1cada993038a65be34f7f7a68745a8728d1477e3491fc988a4b3ffeaae0f64d08"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-af0077cfbd6e94c025df07a4c5a1a4e8256c183a28ea2b6b0fc1454aed828ba1cada993038a65be34f7f7a68745a8728d1477e3491fc988a4b3ffeaae0f64d08"' :
                                            'id="xs-controllers-links-module-AuthModule-af0077cfbd6e94c025df07a4c5a1a4e8256c183a28ea2b6b0fc1454aed828ba1cada993038a65be34f7f7a68745a8728d1477e3491fc988a4b3ffeaae0f64d08"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-af0077cfbd6e94c025df07a4c5a1a4e8256c183a28ea2b6b0fc1454aed828ba1cada993038a65be34f7f7a68745a8728d1477e3491fc988a4b3ffeaae0f64d08"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-af0077cfbd6e94c025df07a4c5a1a4e8256c183a28ea2b6b0fc1454aed828ba1cada993038a65be34f7f7a68745a8728d1477e3491fc988a4b3ffeaae0f64d08"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-af0077cfbd6e94c025df07a4c5a1a4e8256c183a28ea2b6b0fc1454aed828ba1cada993038a65be34f7f7a68745a8728d1477e3491fc988a4b3ffeaae0f64d08"' :
                                        'id="xs-injectables-links-module-AuthModule-af0077cfbd6e94c025df07a4c5a1a4e8256c183a28ea2b6b0fc1454aed828ba1cada993038a65be34f7f7a68745a8728d1477e3491fc988a4b3ffeaae0f64d08"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/LatihanModule.html" data-type="entity-link" >LatihanModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-LatihanModule-ba78e60cb56ff8d284ccf3bc6991a51857bea6a2350efd399c9a42a2c53a84eec5b3c98a0b63e86c928063b54f339afe5290bbe0dd9dd98d563e490544427810"' : 'data-bs-target="#xs-controllers-links-module-LatihanModule-ba78e60cb56ff8d284ccf3bc6991a51857bea6a2350efd399c9a42a2c53a84eec5b3c98a0b63e86c928063b54f339afe5290bbe0dd9dd98d563e490544427810"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-LatihanModule-ba78e60cb56ff8d284ccf3bc6991a51857bea6a2350efd399c9a42a2c53a84eec5b3c98a0b63e86c928063b54f339afe5290bbe0dd9dd98d563e490544427810"' :
                                            'id="xs-controllers-links-module-LatihanModule-ba78e60cb56ff8d284ccf3bc6991a51857bea6a2350efd399c9a42a2c53a84eec5b3c98a0b63e86c928063b54f339afe5290bbe0dd9dd98d563e490544427810"' }>
                                            <li class="link">
                                                <a href="controllers/LatihanController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LatihanController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-LatihanModule-ba78e60cb56ff8d284ccf3bc6991a51857bea6a2350efd399c9a42a2c53a84eec5b3c98a0b63e86c928063b54f339afe5290bbe0dd9dd98d563e490544427810"' : 'data-bs-target="#xs-injectables-links-module-LatihanModule-ba78e60cb56ff8d284ccf3bc6991a51857bea6a2350efd399c9a42a2c53a84eec5b3c98a0b63e86c928063b54f339afe5290bbe0dd9dd98d563e490544427810"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-LatihanModule-ba78e60cb56ff8d284ccf3bc6991a51857bea6a2350efd399c9a42a2c53a84eec5b3c98a0b63e86c928063b54f339afe5290bbe0dd9dd98d563e490544427810"' :
                                        'id="xs-injectables-links-module-LatihanModule-ba78e60cb56ff8d284ccf3bc6991a51857bea6a2350efd399c9a42a2c53a84eec5b3c98a0b63e86c928063b54f339afe5290bbe0dd9dd98d563e490544427810"' }>
                                        <li class="link">
                                            <a href="injectables/LatihanService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LatihanService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PrismaModule.html" data-type="entity-link" >PrismaModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PrismaModule-91701a45e18d07be0d4c557b1ee038774d3156072d5e9508c71783c6308df39b770b97d11c3f7f4433a60dac13e6d2cf51f3da4bbe3881f9871adc7dd6e7c204"' : 'data-bs-target="#xs-injectables-links-module-PrismaModule-91701a45e18d07be0d4c557b1ee038774d3156072d5e9508c71783c6308df39b770b97d11c3f7f4433a60dac13e6d2cf51f3da4bbe3881f9871adc7dd6e7c204"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PrismaModule-91701a45e18d07be0d4c557b1ee038774d3156072d5e9508c71783c6308df39b770b97d11c3f7f4433a60dac13e6d2cf51f3da4bbe3881f9871adc7dd6e7c204"' :
                                        'id="xs-injectables-links-module-PrismaModule-91701a45e18d07be0d4c557b1ee038774d3156072d5e9508c71783c6308df39b770b97d11c3f7f4433a60dac13e6d2cf51f3da4bbe3881f9871adc7dd6e7c204"' }>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SchoolModule.html" data-type="entity-link" >SchoolModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-SchoolModule-0d151c51a1f6e9b5e79b1470f325bb61ae7c9ec11ef3e090d757553f12c408188c7bdf4b7fb4abc76b8e04ec6b75b4cbf5dafe0efba94b1b0fec0230499b281a"' : 'data-bs-target="#xs-controllers-links-module-SchoolModule-0d151c51a1f6e9b5e79b1470f325bb61ae7c9ec11ef3e090d757553f12c408188c7bdf4b7fb4abc76b8e04ec6b75b4cbf5dafe0efba94b1b0fec0230499b281a"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SchoolModule-0d151c51a1f6e9b5e79b1470f325bb61ae7c9ec11ef3e090d757553f12c408188c7bdf4b7fb4abc76b8e04ec6b75b4cbf5dafe0efba94b1b0fec0230499b281a"' :
                                            'id="xs-controllers-links-module-SchoolModule-0d151c51a1f6e9b5e79b1470f325bb61ae7c9ec11ef3e090d757553f12c408188c7bdf4b7fb4abc76b8e04ec6b75b4cbf5dafe0efba94b1b0fec0230499b281a"' }>
                                            <li class="link">
                                                <a href="controllers/SchoolController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SchoolController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-SchoolModule-0d151c51a1f6e9b5e79b1470f325bb61ae7c9ec11ef3e090d757553f12c408188c7bdf4b7fb4abc76b8e04ec6b75b4cbf5dafe0efba94b1b0fec0230499b281a"' : 'data-bs-target="#xs-injectables-links-module-SchoolModule-0d151c51a1f6e9b5e79b1470f325bb61ae7c9ec11ef3e090d757553f12c408188c7bdf4b7fb4abc76b8e04ec6b75b4cbf5dafe0efba94b1b0fec0230499b281a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SchoolModule-0d151c51a1f6e9b5e79b1470f325bb61ae7c9ec11ef3e090d757553f12c408188c7bdf4b7fb4abc76b8e04ec6b75b4cbf5dafe0efba94b1b0fec0230499b281a"' :
                                        'id="xs-injectables-links-module-SchoolModule-0d151c51a1f6e9b5e79b1470f325bb61ae7c9ec11ef3e090d757553f12c408188c7bdf4b7fb4abc76b8e04ec6b75b4cbf5dafe0efba94b1b0fec0230499b281a"' }>
                                        <li class="link">
                                            <a href="injectables/SchoolService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SchoolService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TaskModule.html" data-type="entity-link" >TaskModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-TaskModule-91a3d8cb7ba09773df7246925da14cee16ac8da34363a620fce2e31b9284a105e72e559809521d41d588fefea1fc50df2d7787b8a16cbb06e13fd03ad3b08030"' : 'data-bs-target="#xs-controllers-links-module-TaskModule-91a3d8cb7ba09773df7246925da14cee16ac8da34363a620fce2e31b9284a105e72e559809521d41d588fefea1fc50df2d7787b8a16cbb06e13fd03ad3b08030"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TaskModule-91a3d8cb7ba09773df7246925da14cee16ac8da34363a620fce2e31b9284a105e72e559809521d41d588fefea1fc50df2d7787b8a16cbb06e13fd03ad3b08030"' :
                                            'id="xs-controllers-links-module-TaskModule-91a3d8cb7ba09773df7246925da14cee16ac8da34363a620fce2e31b9284a105e72e559809521d41d588fefea1fc50df2d7787b8a16cbb06e13fd03ad3b08030"' }>
                                            <li class="link">
                                                <a href="controllers/TaskController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TaskController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-TaskModule-91a3d8cb7ba09773df7246925da14cee16ac8da34363a620fce2e31b9284a105e72e559809521d41d588fefea1fc50df2d7787b8a16cbb06e13fd03ad3b08030"' : 'data-bs-target="#xs-injectables-links-module-TaskModule-91a3d8cb7ba09773df7246925da14cee16ac8da34363a620fce2e31b9284a105e72e559809521d41d588fefea1fc50df2d7787b8a16cbb06e13fd03ad3b08030"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TaskModule-91a3d8cb7ba09773df7246925da14cee16ac8da34363a620fce2e31b9284a105e72e559809521d41d588fefea1fc50df2d7787b8a16cbb06e13fd03ad3b08030"' :
                                        'id="xs-injectables-links-module-TaskModule-91a3d8cb7ba09773df7246925da14cee16ac8da34363a620fce2e31b9284a105e72e559809521d41d588fefea1fc50df2d7787b8a16cbb06e13fd03ad3b08030"' }>
                                        <li class="link">
                                            <a href="injectables/TaskService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TaskService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/LatihanController.html" data-type="entity-link" >LatihanController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/SchoolController.html" data-type="entity-link" >SchoolController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/TaskController.html" data-type="entity-link" >TaskController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateSchoolDto.html" data-type="entity-link" >CreateSchoolDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateTaskDto.html" data-type="entity-link" >CreateTaskDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginDto.html" data-type="entity-link" >LoginDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/RegisterDto.html" data-type="entity-link" >RegisterDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/School.html" data-type="entity-link" >School</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateSchoolDto.html" data-type="entity-link" >UpdateSchoolDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateTaskDto.html" data-type="entity-link" >UpdateTaskDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtStrategy.html" data-type="entity-link" >JwtStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LatihanService.html" data-type="entity-link" >LatihanService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PrismaService.html" data-type="entity-link" >PrismaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SchoolService.html" data-type="entity-link" >SchoolService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TaskService.html" data-type="entity-link" >TaskService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Task.html" data-type="entity-link" >Task</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});