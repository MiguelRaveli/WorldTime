import { useEffect, useState } from "react";
import { TypetimeResult } from "../types/TypetimeResult";
import Result from "../Result";
import classes from "./index.module.css";
type indexT = {
  title: string;
};
const Time = ({ title }: indexT) => {
  const [regiao, setRegiao] = useState(String);

  const [timeZone, setTimeZone] = useState([]);
  const [timeResult, setTimeResult] = useState<TypetimeResult>();
  const [isSearch, setIsSearch] = useState(false);

  const getTimeZone = async () => {
    try {
      const res = await fetch(`http://worldtimeapi.org/api/timezone/`);
      const data = await res.json();
      setTimeZone(data);
    } catch (error) {
      console.log(error);
    }
  };
  const getLocation = async () => {
    try {
      const res = await fetch(`http://worldtimeapi.org/api/timezone/${regiao}`);

      const data = await res.json();
      setTimeResult(data);
      setIsSearch(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTimeZone();
    if (isSearch) {
      getLocation();
    }
  }, []);
  return (
    <div className={classes.index}>
      <div className={classes.container}>
        <div className={classes.title}>
          <h1>{title}</h1>
        </div>
        <div className={classes.select}>
          <select onChange={(e) => setRegiao(e.target.value)}>
            <option value="Selecione" defaultValue="Selecione">
              Selecione
            </option>
            {timeZone.map((zone, index) => (
              <>
                <option key={index} value={zone}>
                  {zone}
                </option>
              </>
            ))}
          </select>
        </div>
        <div className={classes.btns}>
          <button onClick={() => getLocation()}>Pesquisar</button>
        </div>
        <div className={classes.search}>
          {isSearch ? (
            <Result
              timeResult={timeResult!}
              key={Math.floor(Math.random() * 10000)}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Time;
