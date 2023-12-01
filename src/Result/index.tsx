import { TypetimeResult } from "../types/TypetimeResult";

type timeResultT = {
  timeResult: TypetimeResult;
};
const Result = ({ timeResult }: timeResultT) => {
  return (
    <>
      <p>Data e hora: {timeResult.datetime}</p>
      <hr />
      <p>Dia da Semana: {timeResult.day_of_week}</p>
      <hr />
      <p>Dia do Ano: {timeResult.day_of_year}</p>
      <hr />
      <p>Número da Semana: {timeResult.week_number}</p>
      <hr />
    </>
  );
};

export default Result;
