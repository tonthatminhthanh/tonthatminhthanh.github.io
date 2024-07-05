import PageLayout from "./PageLayout";
import linkedinPfp from "../images/linkedin.png"

export default function Contact()
{
    const ProfileCard = () => {
        return (
          <div className="flex items-center justify-center h-screen">
            <div className="grid grid-cols-2 gap-6">
                <div key="github" className="dark:bg-white bg-gray-600 rounded-lg shadow-md p-6">
                    <img src="https://github.com/tonthatminhthanh.png" alt="Profile" className="w-20 h-20 rounded-full mx-auto mb-4" />
                    <h2 className="text-lg font-bold mb-2 dark:text-black text-white">tonthatminhthanh</h2>
                    <div className="flex justify-center pb-4">
                        <a
                            href="https://github.com/tonthatminhthanh"
                            className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                        >
                        Github
                        </a>
                    </div>
                </div>
                <div key="github" className="dark:bg-white bg-gray-600 rounded-lg shadow-md p-6">
                    <img src={linkedinPfp} alt="Profile" className="w-20 h-20 rounded-full mx-auto mb-4" />
                    <h2 className="text-lg font-bold mb-2 dark:text-black text-white">Minh Thanh Ton That</h2>
                    <div className="flex justify-center pb-4">
                        <a
                            href="https://www.linkedin.com/in/minh-thanh-ton-that-431ba5317/"
                            className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                        >
                        LinkedIn
                        </a>
                    </div>
                </div>
            </div>
          </div>
        );
      };

    return (
        <PageLayout page={
            <div>
                <ProfileCard />
            </div>
        } />
    )
}