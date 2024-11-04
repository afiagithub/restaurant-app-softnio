import rectangle from "../../assets/Rectangle.png"

const TitleLine = ({title, sub}) => {
    return (
        <div>
            <p className="flex flex-row items-center gap-4 font-robo text-lg font-semibold text-[#BD1F17]">
                <img src={rectangle} alt="point" /> {sub}</p>
            <h3 className="capitalize font-bebas font-medium text-4xl lg:text-5xl text-[#181818] my-5">
                {title}</h3>
        </div>
    );
};

export default TitleLine;