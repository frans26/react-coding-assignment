import { UserInfoProps } from "../../models/UserInfo";

const UserInfo = (props: UserInfoProps) => {
  const { label, value } = props;

  return (
    <p className="break-words text-sm">
      <span className="font-medium">{label}:</span> {value}
    </p>
  );
};

export default UserInfo;
