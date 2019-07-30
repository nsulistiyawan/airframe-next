import React from 'react';

import { LayoutNavbarOnly } from './../../features/Layout/LayoutNavbarOnly';
import {
    Container,
    Link,
} from './../../components';

const NavbarOnly = () => (
    <Container>
        <p className="mb-5 mt-3">
            Welcome to the <b>&quot;Default&quot;</b> Admin Dashboard Theme based on <a href="https://getbootstrap.com" className="text-primary" target="_blank" rel="noopener noreferrer">Bootstrap 4.x</a> version for React called&nbsp;
            <a href="https://reactstrap.github.io" className="text-primary" target="_blank" rel="noopener noreferrer">reactstrap</a> - easy to use React Bootstrap 4 components compatible with React 16+.
        </p>

        <section className="mb-5">
            <h6>
                Layouts for this framework:
            </h6>
            <ul className="pl-3">
                <li>
                    <Link to="/layouts/navbar-only" className="text-primary">Navbar Only</Link>
                </li>
                <li>
                    <Link to="/layouts/sidebar-and-navbar" className="text-primary">Sidebar with Navbar</Link>
                </li>
            </ul>
        </section>

        <section className="mb-5">
            <h6>
                This Starter has:
            </h6>
            <ul className="pl-3">
                <li>
                    <a href="#" className="text-primary" target="_blank" rel="noopener noreferrer">Documentation</a> - which describes how to configure this version.
                </li>
                <li>
                    <a href="#" className="text-primary" target="_blank" rel="noopener noreferrer">Credits</a> - technical details of which versions are used for this framework.
                </li>
                <li>
                    <a href="#" className="text-primary" target="_blank" rel="noopener noreferrer">Roadmap</a> - update for this technology for the coming months.
                </li>
                <li>
                    <b>Bugs</b> - do you see errors in this version? Please report vie email: <i>info@webkom.co</i>
                </li>
            </ul>
        </section>

        <section className="mb-5">
            <h6>
                Other versions for &quot;Default&quot;:
            </h6>
            <ul className="pl-3">
                <li>
                    <a href="http://dashboards.webkom.co/jquery/default" className="text-primary">jQuery</a> - based on the newest <i>Bootstrap 4.x</i>
                </li>
                <li>
                    <a href="http://dashboards.webkom.co/react/default" className="text-primary">React</a> - based on the newest <i>Reactstrap</i>
                </li>
                <li>
                    <a href="http://dashboards.webkom.co/react-next/default" className="text-primary">Next.js (React)</a> - based on the newest <i>Reactstrap</i> and <i>Next.js</i>
                </li>
                <li>
                    <a href="http://dashboards.webkom.co/angular/default" className="text-primary">Angular</a> - based on the newest <i>ng-bootstrap</i>
                </li>
                <li>
                    <a href="http://dashboards.webkom.co/net-mvc/default" className="text-primary">.NET MVC</a> - based on the newest <i>Bootstrap 4.x</i>
                </li>
                <li>
                    <a href="http://dashboards.webkom.co/vue/default" className="text-primary">Vue.js</a> - based on the newest <i>BootstrapVue</i>
                </li>
                <li>
                    <b>Other Versions</b>, such as <i>Ruby on Rails, Ember, Laravel etc.</i>, please ask for the beta version via email: info@webkom.co
                </li>
            </ul>
        </section>

        <section className="mb-5">
            <h6>
                Work Orders:
            </h6>
            <p>
                Regarding configuration, changes under client&apos;s requirements.<br />
                Pleace contact us through the <a href="http://wbkom.co/contact" className="text-primary" target="_blank" rel="noopener noreferrer">webkom.co/contact</a> website.
            </p>
        </section>
    </Container>
);

NavbarOnly.layoutComponent = LayoutNavbarOnly;

export default NavbarOnly;
