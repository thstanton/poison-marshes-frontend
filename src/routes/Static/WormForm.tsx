export default function WormForm() {
  return (
    <div className="min-h-dvh w-full bg-white font-serif">
      <div className="prose">
        <h1>W.O.R.M. Initiation Form</h1>
        <p>
          <i>
            The Wasteland Organised Resistance Movement stands for justice for
            the earth and the marsh. Consider yourself worthy of joining our
            esteemed freedom fighters? Show us.
          </i>
        </p>
        <form>
          <label htmlFor="name">
            Name:
            <input
              type="text"
              name="name"
              className="border-2 border-gray-500"
            />
          </label>
          <br />
          <label htmlFor="favouritePlant">
            Favourite plant:
            <select className="border-2 border-gray-500">
              <option value="cactus">Cactus</option>
              <option value="orchid">Orchid</option>
              <option value="tulip">Tulip</option>
            </select>
          </label>
          <br />
          <h2>Favourite passtimes:</h2>
          <label htmlFor="gardening">
            <input type="checkbox" name="gardening" /> Gardening
          </label>
          <br />
          <label htmlFor="nature">
            <input type="checkbox" name="nature" /> Appreciating nature
          </label>
          <br />
          <label htmlFor="tilling">
            <input type="checkbox" name="tilling" /> Tilling the soil
          </label>
          <br />
          <label htmlFor="caring">
            <input type="checkbox" name="caring" /> Animal Husbandry
          </label>
          <br />
          <label htmlFor="pollution">
            <input type="checkbox" name="pollution" /> Pollution
          </label>
          <br />
          <button className="border-2 border-gray-500 bg-gray-400 px-2 drop-shadow">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
