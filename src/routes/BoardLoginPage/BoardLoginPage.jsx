import OAuth from "components/GoogleAuth/OAuth";
import './index.less'

const BoardLoginPage = () => {

    return (
      <div className="board-login">
            <h1>Board Login</h1>
            <p>The admin dashboard is only accessible by QuantSoc directors and executives.</p>
            <OAuth />
            <p>If you encounter a technical issue, please contact Sam T or <a className="link" href="mailto:unsw.quantsoc@gmail.com">
          email us here!</a></p>
      </div>
    );
  };
  export default BoardLoginPage;
  