function ReservationForm({ maxCapacity }) {
  const guestList = Array.from({ length: maxCapacity }, (_, i) => {
    return { name: `${i + 1} guest${i === 0 ? "" : "s"}`, value: i + 1 };
  });

  return (
    <div className="flex flex-col bg-primary-900 flex-1">
      <div className="bg-primary-800 flex justify-between h-10 text-primary-300 px-12 py-3 items-center">
        <div>Loggedin in as</div>
        <div>Username</div>
      </div>
      <form className="px-12 py-7">
        <div className="flex flex-col gap-4">
          <div>How many guests?</div>
          <select
            defaultValue=""
            className="bg-primary-200 text-primary-900 w-full h-10 px-4 rounded-sm"
          >
            <option value="" disabled>
              Select number of guest...
            </option>
            {guestList.map((g) => (
              <option value={g.value} key={g.value}>
                {g.name}
              </option>
            ))}
          </select>
          <div>Anything we should know about your stay?</div>
          <textarea
            className="h-20 bg-primary-200 px-4 rounded-sm py-4 text-primary-900"
            placeholder="Any pets, allergies, special requirements, etc.?"
          ></textarea>
        </div>
        <div className="flex-1 flex justify-end text-primary-200  pt-9">
          <p>Start by selecting dates</p>
        </div>
      </form>
    </div>
  );
}

export default ReservationForm;
