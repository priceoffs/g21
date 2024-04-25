const VacanciesPage = () => {
  return (
    <main>
      <h1 className="mb-10 text-3xl font-bold">Вакансії</h1>
      <ul>
        <li>
          <strong>Психолог:</strong>
          <ul>
            <li>Ставка: 0,75</li>
            <li>
              Профілактика соціальної і шкільної деадаптації,
              створення комфортного клімату в навчальному закладі.
            </li>
            <li>Графік роботи: пн-пт. 08-30 - 15.00</li>
          </ul>
        </li>
        <li className="mt-10">
          <strong>Кухар-технолог:</strong>
          <ul>
            <li>Ставка: 1</li>
            <li>Графік роботи: пн-пт. 08-30 - 15.00</li>
          </ul>
        </li>
      </ul>
    </main>
  );
};

export default VacanciesPage;
