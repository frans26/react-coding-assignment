import { User } from "../../models/User";
import UserInfo from "../user-info";

const Card = (props: User) => {
  const { name, email, phone, website, address, company } = props;
  const { suite, street, city, zipcode } = address;

  const completeAddress = `${suite}, ${street}, ${city}, ${zipcode}`;

  return (
    <div className="border border-solid rounded-md p-4 bg-white shadow-xl">
      <div className="">
        <img
          className="w-24 h-24 border border-solid border-neutral-300 rounded-full"
          src={`https://avatars.dicebear.com/v2/avataaars/${name}.svg?backgroundColor=65c9ff`}
          alt="avatar"
        />
      </div>
      <div className="mt-2">
        <h5 className="text-xl font-semibold">{name}</h5>

        <UserInfo label="E-mail" value={email} />
        <UserInfo label="Phone" value={phone} />
        <UserInfo label="Site" value={website} />
        <UserInfo label="Address" value={completeAddress} />
      </div>

      <div className="py-4">
        <div className="border-t border-solid"></div>
      </div>

      <div>
        <h6 className="text-base font-semibold">Company</h6>

        <UserInfo label="Name" value={company.name} />
        <UserInfo label="Catch Phrase" value={company.catchPhrase} />
        <UserInfo label="Business" value={company.bs} />
      </div>
    </div>
  );
};

export default Card;
