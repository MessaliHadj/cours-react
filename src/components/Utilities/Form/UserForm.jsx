import { Navigate, Link } from "react-router-dom";

const UserForm = ({link, msg, title, input}) => {
  return (
    <div className='container'>
      <div className='row justify-content-center'>
        <div className='col-12 col-md-6 my-3 mb-sm-0'>
          <div className="card">
            {user && <Navigate to="/account" replace={true} />}
            <div className="card-body">
              <h1 className="card-title">{title}</h1>
              <form onSubmit={handleSubmit}>
                <div className="form-floating">
                  {input.map((El, index) => <El key={index} link={link} msg={msg} />)}
                </div>
                <div className="d-flex justify-content-between">
                  <div className="my-4 form-text text-primary">
                    <Link className="text-decoration-none" to={link}>{msg}</Link>
                  </div>
                  <div>
                    <button type="submit" className="btn btn-primary btn-lg mt-2">Valider</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserForm;