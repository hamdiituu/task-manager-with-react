import { Card, Header } from "../../components";
function Profile(params) {
  return (
    <>
      <Header />
      <Card title={"Profilim"} content={<p>Kullanıcı Adı </p>} />
    </>
  );
}

export default Profile;
