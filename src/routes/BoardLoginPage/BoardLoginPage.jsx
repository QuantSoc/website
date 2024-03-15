import OAuth from "components/GoogleAuth/OAuth";

const BoardLoginPage = () => {

    return (
      <div>
            <h1>Board Login</h1>
            <p>The admin dashboard is only accessible by QuantSoc directors and executives.</p>
            <OAuth type='Login' />
            <p>If you are on the QuantSoc board and do not have access to the admin dashboard, please contact Sam T.</p>
      </div>
    );
  };
  export default BoardLoginPage;
  