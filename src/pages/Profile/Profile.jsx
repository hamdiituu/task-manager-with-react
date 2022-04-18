import { Card, Alert } from "../../components";
import ProfileProvider, { ProfileContext } from "./context";
function Profile(params) {
    return (
        <ProfileProvider>
            <ProfileContext.Consumer>
                {({ isFetching, isError, isSuccess, user }) => (
                    <>
                        {isError && (
                            <div className="d-flex justify-content-center">
                                <div className="col-8">
                                    <Alert theme={"danger"}>
                                        İşlem esnasında bir hata oluştu!{" "}
                                    </Alert>
                                </div>
                            </div>
                        )}
                        <Card
                            isLoading={isFetching}
                            title={"Profilim"}
                            content={
                                isSuccess && (
                                    <>
                                        <p>Ad : {user.name}</p>{" "}
                                        <p>Eposta : {user.email}</p>{" "}
                                    </>
                                )
                            }
                        />
                    </>
                )}
            </ProfileContext.Consumer>
        </ProfileProvider>
    );
}

export default Profile;
