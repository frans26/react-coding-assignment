import { render } from "@testing-library/react";

import Card from "./Card";
import { User } from "../../models/User";

const cardData: User = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  },
};

describe("Card component test", () => {
  it("should render card info", () => {
    const { getByText } = render(<Card {...cardData} />);
    expect(getByText(cardData.name)).toBeInTheDocument();
    expect(getByText(cardData.phone)).toBeInTheDocument();
  });
});
