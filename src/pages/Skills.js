import PageLayout from "./PageLayout";


function getImagesHtmlList({skills})
{
    return skills.map(function(skill, index) {
        return ( 
            <img key={skill} src={"/skills/" + skill + ".png"} className="aspect-square w-16 h-16 object-fill transition-all hover:rounded-none rounded-md hover:cursor-pointer dark:bg-white bg-gray-800 bg-opacity-85" alt={skill} />)
    })
}

function SkillsCard({ title, skills})
{
    var temp = getImagesHtmlList({skills})
    return (
        <div className="flex items-center justify-center mb-1">
            <div className="max-w-3xl mr-auto p-2">
                <h1 className="text-3xl font-bold mb-2">{title}</h1>
                <div className="grid grid-cols-6 max-sm:grid-cols-2 gap-1">
                    {temp}
                </div>
            </div>
        </div>
    )
}

export default function Skills()
{
    return (
        <PageLayout page={
            <div>
                <SkillsCard title="Programming languages" skills={["Java","CSharp","CPP","Dart","Javascript","PHP","Python"]} />
                <SkillsCard title="Frameworks" skills={["Flutter","React","ASPNET","Dotnet"]} />
                <SkillsCard title="Game development" skills={["Unity","Godot","Flame"]} />
                <SkillsCard title="Others" skills={["Arduino","OpenCV"]} />
            </div>
        }/>
    )
}