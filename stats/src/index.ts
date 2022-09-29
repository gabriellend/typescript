import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { Summary } from "./Summary";

const matchReader = MatchReader.fromCsv('football.csv');
const winHtmlSummary = Summary.winsAnalysisWithHtmlReport('Man United', 'report.html');
const winConsoleSummary = new Summary(new WinsAnalysis('Chelsea'), new ConsoleReport());

matchReader.load();
winHtmlSummary.buildAndPrintReport(matchReader.matches);
winConsoleSummary.buildAndPrintReport(matchReader.matches);

