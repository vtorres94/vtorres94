import { createContext } from "react";
import DATA from "../static/jobs.json";

const { jobs } = DATA;
export const JobsContext = createContext(jobs);
