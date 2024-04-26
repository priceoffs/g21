import Image from "next/image";
import ScructureImg from "@/public/structure.png";

const BusinessPage = () => {
  return (
    <main>
      <h1 className="mb-10 text-3xl font-bold">
        Криворізька гімназія №21 Криворізької міської ради
      </h1>
      <table className="mb-10">
        <thead>
          <tr>
            <th colSpan={2}>Візитка гімназії</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Юридична адреса: </td>
            <td>
              Україна, 50084, Дніпропетровська обл., м. Кривий Ріг, вул. Спаська
              8 А, моб.тел. 0976680603
            </td>
          </tr>
          <tr>
            <td>Директор: </td>
            <td>
              Миргородська Анжеліна Борисівна, педагогічний стаж 39 р.,
              учитель-методист, відмінник освіти.
            </td>
          </tr>
          <tr>
            <td>Ліцензований обсяг прийому: </td>
            <td>
              913 осіб. Загальна кількість учнів – 521 осіб. У школі 20 класів,
              із них 1- 4 класів - 9 класів , 5-9 класи - 11 класів
            </td>
          </tr>
          <tr>
            <td>Мова навчання: </td>
            <td>Українська</td>
          </tr>
        </tbody>
      </table>

      <table>
        <thead>
          <tr>
            <th colSpan={2}>Педагогічні працівники</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Усього</td>
            <td>63</td>
          </tr>
          <tr>
            <td>Учителів</td>
            <td>35</td>
          </tr>
          <tr>
            <td>Практичних психологів</td>
            <td>0</td>
          </tr>
          <tr>
            <td>Педагогів-організаторів</td>
            <td>0</td>
          </tr>
          <tr>
            <td>Соціальних педагогів</td>
            <td>1</td>
          </tr>
          <tr>
            <td>Логопедів</td>
            <td>1</td>
          </tr>
          <tr>
            <td>Керівник гуртків</td>
            <td>1</td>
          </tr>
          <tr>
            <td>Обслуговувального персоналу</td>
            <td>26</td>
          </tr>
        </tbody>
      </table>
      <h2 className="mb-10 text-3xl font-bold mt-10">Структура підприємства</h2>
      <Image
        src={ScructureImg}
        alt="Structure"
        width={500}
        height={500}
        className="m-auto"
        placeholder="blur"
      />
    </main>
  );
};

export default BusinessPage;
