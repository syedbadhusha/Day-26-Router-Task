import { Link,useLocation } from "react-router-dom";
function Nav() {
    const location = useLocation();
  return (
    <>
      <nav className="d-flex justify-content-center">
        <div className="nav nav-tabs " id="nav-tab" role="tablist">
          <Link to={"/"} className={`nav-link ${location.pathname == '/' ? 'active':''}`} aria-selected={`${location.pathname == '/'?"true":"false"}`}>
            ALL
          </Link>
          <Link to={"/fullstackdevelopment"} className={`nav-link ${location.pathname == '/fullstackdevelopment' ? 'active':''}`} aria-selected={`${location.pathname == '/fullstackdevelopment'?"true":"false"}`}>
            FULL STACK DEVELOPMENT
          </Link>
          <Link to={"/datascience"} className={`nav-link ${location.pathname == '/datascience' ? 'active':''}`} aria-selected={`${location.pathname == '/datascience'?"true":"false"}`}>
            DATA SCIENCE
          </Link>
          <Link to={"/cybersecurity"} className={`nav-link ${location.pathname == '/cybersecurity' ? 'active':''}`} aria-selected={`${location.pathname == '/cybersecurity'?"true":"false"}`}>
            CYBER SECURITY
          </Link>
          <Link to={"/career"} className={`nav-link ${location.pathname == '/career' ? 'active':''}`} aria-selected={`${location.pathname == '/career'?"true":"false"}`}>
            CAREER
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Nav;
