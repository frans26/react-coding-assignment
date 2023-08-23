import { render } from "@testing-library/react";

import UserInfo from "./UserInfo";
import { UserInfoProps } from "../../models/UserInfo";

const userData: UserInfoProps = {
  label: "Phone",
  value: "123456",
};

describe("UserInfo component test", () => {
  it("should render user info", () => {
    const { getByText } = render(
      <UserInfo label={userData.label} value={userData.value} />
    );

    expect(getByText("123456")).toBeInTheDocument();
  });
});
