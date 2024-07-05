import PageLayout from "./PageLayout"
import programmerImage from "../images/programmer.png"

export default function Home()
{
    var dob = new Date("02/10/2002")
    var month_difference = Date.now() - dob.getTime()
    var age_dt = new Date(month_difference)
    var year = age_dt.getUTCFullYear()
    var age = Math.abs(year - 1970)

    return (
        <PageLayout page={
            <div className="text-center">
                <div className="flex flex-col sm:flex-row items-center justify-center">
                    <figure className="inline-block">
                        <img src={programmerImage} width={512} height={512} alt="programmer" />
                        <figcaption><a className="lg:text-[6px] text-[8px]" href="https://lovepik.com/images/png-programmer.html">Programmer Png vectors by Lovepik.com</a></figcaption>
                    </figure>
                    <div className="ml-4 max-sm:mt-0 lg:w-1/2">
                        <p className="font-semibold lg:text-3xl text-xl">Hello, my name is Tôn Thất Minh Thành</p>
                        <p className="lg:text-lg text-base">I am a {age} years old software developer, specializing in: fullstack development, mobile app development and game development. 
                            I graduated from Nha Trang University with a Bachelor degree in Informations Technology. 
                            My academic interests include image processing, embedded programming and artificial intelligence. 
                            My non-academic interests include badminton and art.
                        </p>
                        <p className="font-semibold lg:text-2xl text-xl">Welcome to my personal website!</p>
                    </div>
                </div>
            </div>
        } />
    )
}