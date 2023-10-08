import { NextApiRequest, NextApiResponse } from 'next';
import puppeteer from 'puppeteer';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.datasciencelist.com/');
    const screenshotBuffer = await page.screenshot();
    await browser.close();

    res.setHeader('Content-Type', 'image/png');
    res.status(200).send(screenshotBuffer);
  } catch (error) {
    console.error('Error capturing screenshot:', error);
    res.status(500).end();
  }
};