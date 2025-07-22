interface LevelComponentProps {
  argomento: string;
  img: string;
  check: string;
  value: number;
}

export function LevelComponent({argomento, img, check, value}: LevelComponentProps){

    return(
        <>
        <div className="bg-my-light-purple-100 p-5 m-7 rounded-[25px] text-[12px]">
            <div className="flex flex-row">
                <div className="bg-my-dark-purple-100 w-[110px] h-[110px] rounded-[25px]">
                    <img className="max-w-[100%] p-3" src={img}/>
                </div>
                <div className="flex flex-col ml-10">
                    <div className="flex flex-row justify-between items-start">
                        <div className="p-1">
                            <p>Completato:</p>
                            <b> {argomento}</b>
                        </div>
                        <div className="bg-my-dark-purple-100 ml-20 w-[30px] h-[30px] rounded-[50px]">
                            <img className="p-1 w-[29px] h-[29px]" src={check} />
                        </div>
                    </div>
                    <div className="flex flex-col justify-between p-1 mt-5">
                        <div className="flex justify-between p-1">
                            <p>Progresso:</p>
                            <p>{value}%</p>
                        </div>
                        <progress className="rounded-[25px] accent-sky-100" max="100" value={value}></progress>
                    </div>

                </div>
            </div>

        </div>
        </>
    )
}
