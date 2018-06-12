import React from 'react';
import {storiesOf} from '@storybook/react';
import Input from 'js/Input';
import {ident} from 'js/util';
import render from "stories/render";

const ImageSrc = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/SIPI_Jelly_Beans_4.1.07.tiff/lossy-page1-256px-SIPI_Jelly_Beans_4.1.07.tiff.jpg';

storiesOf('Input', module)
  .add('type="text" (default)', render(<Input onChange={ident} value=""/>))
  .add('type="button"', render(<Input type="button" onChange={ident} onClick={ident} value="Button"/>))
  .add('type="checkbox"', render(<Input type="checkbox" onChange={ident} value="" checked/>))
  .add('type="color"', render(<Input type="color" onChange={ident} value="#00FF00"/>))
  .add('type="date"', render(<Input type="date" onChange={ident} value="2018-01-01"/>))
  .add('type="datetime-local"', render(<Input type="datetime-local" onChange={ident} value="2018-01-01T11:30"/>))
  .add('type="email"', render(<Input type="email" onChange={ident} value="email@example.com"/>))
  .add('type="file"', render(<Input type="file" onChange={ident} value=""/>))
  .add('type="hidden"', render(<Input type="hidden" onChange={ident} value="hidden"/>))
  .add('type="image"', render(<Input type="image" onChange={ident} value="" src={ImageSrc}/>))
  .add('type="month"', render(<Input type="month" onChange={ident} value="2018-06" />))
  .add('type="number"', render(<Input type="number" onChange={ident} value="42" />))
  .add('type="password"', render(<Input type="password" onChange={ident} value="password"/>))
  .add('type="radio"', render(<Input type="radio" onChange={ident} value="" checked/>))
  .add('type="range"', render(<Input type="range" onChange={ident} min={0} max={10} value="2"/>))
  .add('type="reset"', render(<Input type="reset" onChange={ident} value="Reset" />))
  .add('type="search"', render(<Input type="search" onChange={ident} value=""/>))
  .add('type="submit"', render(<form><Input type="submit" onChange={ident} value="Submit"/></form>))
  .add('type="tel"', render(<Input type="tel" onChange={ident} value="+1-555-555-5555" />))
  .add('type="time"', render(<Input type="time" onChange={ident} value="11:30" />))
  .add('type="url"', render(<Input type="url" onChange={ident} value="http://www.example.com" />))
  .add('type="week"', render(<Input type="week" onChange={ident} value="2018-W26" />));