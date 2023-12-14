import {
  HourlyTemperatureAndHumidity,
  PressureLevelByTemperature,
} from "./Weather";

// Interfaz para respuesta  de éxito
interface Response {
  code: number;
  data: HourlyTemperatureAndHumidity[] | PressureLevelByTemperature[];
}

export { Response };
