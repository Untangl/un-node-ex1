"use strict";
import axios, {AxiosInstance} from 'axios';
import post from './apiLib/post';
import displayConvertedFile from './displayResult';
import fs from "fs";
import token from './userToken';

const baseURL = '';
const template = "DemoAPI";
const api: AxiosInstance = axios.create({baseURL});

/**
 * POST an MS Excel worksheet to Untangler for conversion.
 * Return an object containing column metadata, rows and analyses.
 */
const postDataFile = async () => {
  const inputData = fs.readFileSync('./sheets/ExDemoFile.xlsx');
  const encInputData = inputData.toString("base64");
  const responseData = await post(api, template, encInputData, token);
  return responseData.data;
}

postDataFile()
  .then((resultData: ConvertedData) => {
    displayConvertedFile(resultData)
  })
  .catch(err => {
    console.log('Error:', err)
    if (err.response.data && err.response.data.message) {
      console.log('**** Failed with error message:', err.response.data.message)
    }
  })

