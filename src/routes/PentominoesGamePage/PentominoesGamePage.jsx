import LBlock from 'components/PentominoesBlocks/LBlock/LBlock';
import './index.less';

const NUMBER_OF_ROWS = 20;
const NUMBER_OF_COLS = 58;

const PentominoesGamePage = () => {
  const rows = Array.from({ length: NUMBER_OF_ROWS });
  const cols = Array.from({ length: NUMBER_OF_COLS });


  return (
    <div className="page">
      <div className="game-component">
        <table className="grid-container">
          <tbody>
            {
              rows.map((_, row_idx) => (
                <tr>
                  {
                    cols.map((_, col_idx) => (
                      <td className="grid-cell"></td>
                  ))}
                </tr>
            ))} 
          </tbody>
        </table>

        <div className='pentominoes-container'>
          <LBlock />

        </div>
      </div>
    </div>
  );
};

export default PentominoesGamePage;
