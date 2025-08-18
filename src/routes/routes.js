import Home from '../pages/Home';
import Install from '../pages/Install';
import AdvancedConfig from '../pages/AdvancedConfig';
import NotFound from '../pages/NotFound';
import Usage from '../pages/Usage';
import InstallLinux from '../pages/InstallLinux';
import InstallMacOS from '../pages/InstallMacOS';
import GettingStarted from '../pages/GettingStarted'
import RunEtz from '../pages/RunEtz';
import SimpleExec from '../pages/SimpleExec';
import TestCases from '../pages/TestCases';
import GeneralConfig from '../pages/GeneralConfig';
import RunWithExecutionFile from '../pages/RunWithExecutionFile';
import SqlExec from '../pages/SQL';
import ApiExec from '../pages/API';
import FileExec from '../pages/FileExec';
import RunWithGeneral from '../pages/RunWithGeneral';
import CliArgs from '../pages/CLIArgs';
import UsageExamples from '../pages/UsageExamples';
import AuthFile from '../pages/AuthFile';
import GoTemplatesFunctions from '../pages/GoTemplatesFunctions';

export const routes = [
  { path: '/', element: <Home />, exact: true},
  { path: '/install', element: <Install /> },
  { path: '/install/linux', element: <InstallLinux /> },
  { path: '/install/osx', element: <InstallMacOS /> },
  { path: '/start', element: <GettingStarted /> },
  { path: '/start/run', element: <RunEtz /> },
  { path: '/start/exec', element: <SimpleExec /> },
  { path: '/config', element: <TestCases /> },
  { path: '/config/general', element: <GeneralConfig /> },
  { path: '/config/executions', element: <RunWithExecutionFile /> },
  { path: '/config/executions/api', element: <ApiExec /> },
  { path: '/config/executions/sql', element: <SqlExec/> },
  { path: '/config/executions/file', element: <FileExec/> },
  { path: '/usage', element: <Usage /> },
  { path: '/usage/general', element: <RunWithGeneral /> },
  { path: '/usage/execution', element: <RunWithExecutionFile /> },
  { path: '/usage/cli', element: <CliArgs /> },
  { path: '/usage/examples', element: <UsageExamples /> },
  { path: '/advanced', element: <AdvancedConfig/> },
  { path: '/advanced/auth', element: <AuthFile/> },
  { path: '/advanced/gofunc', element: <GoTemplatesFunctions/> },
  { path: '*', element: <NotFound /> },
];

export default routes;