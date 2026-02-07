import { Link, createRoutesView } from 'atomic-router-react';
import {
  assessmentDetailsRoute,
  assessmentRoute,
  homeRoute
} from './routes';
import './App.css';

const HomeView = () => {
  return (
    <section className="remote-card">
      <h2>Remote Home</h2>
      <p>
        This microfrontend is running inside Module Federation and uses Atomic
        Router for internal navigation.
      </p>
      <p>
        Pick a section above to open the requested routes:
        <code> /assessment </code> and
        <code> /assessment-details</code>.
      </p>
    </section>
  );
};

const AssessmentView = () => {
  return (
    <section className="remote-card">
      <h2>Assessment</h2>
      <p>
        Random content: 47 participants finished the questionnaire in under
        three minutes, and the median score was 74.
      </p>
      <p>
        Trend snapshot: confidence increased week over week, while completion
        time stayed stable.
      </p>
    </section>
  );
};

const AssessmentDetailsView = () => {
  return (
    <section className="remote-card">
      <h2>Assessment Details</h2>
      <p>
        Random content: Segment A had 18 responses, Segment B had 16 responses,
        and Segment C had 13 responses.
      </p>
      <p>
        Distribution note: the highest concentration appeared in the 70-80
        range with a small tail above 90.
      </p>
    </section>
  );
};

const NotFoundView = () => {
  return (
    <section className="remote-card">
      <h2>Page Not Found</h2>
      <p>The route does not exist in this remote application.</p>
    </section>
  );
};

const RoutesView = createRoutesView({
  routes: [
    { route: homeRoute, view: HomeView },
    { route: assessmentRoute, view: AssessmentView },
    { route: assessmentDetailsRoute, view: AssessmentDetailsView }
  ],
  otherwise: NotFoundView
});

function App() {
  return (
    <div className="remote-app">
      <header className="remote-header">
        <h1>React Remote</h1>
        <nav className="remote-nav">
          <Link to={homeRoute} className="remote-link" activeClassName="is-active">
            Home
          </Link>
          <Link
            to={assessmentRoute}
            className="remote-link"
            activeClassName="is-active"
          >
            Assessment
          </Link>
          <Link
            to={assessmentDetailsRoute}
            className="remote-link"
            activeClassName="is-active"
          >
            Assessment Details
          </Link>
        </nav>
      </header>
      <main>
        <RoutesView />
      </main>
    </div>
  );
}

export default App;
