import {  useLocation } from 'react-router-dom';

export default function GetPath() {
  const location = useLocation();
  return location;
}