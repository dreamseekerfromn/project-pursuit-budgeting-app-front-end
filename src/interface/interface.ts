/**
 * basic structure for both income and spending data.
 * some properties (like sourceCategory, period, misc) are not used currently, but going to use for future update.
 */
export interface singleItemProp {
  id: string,
  date: string,
  sourceTitle: string,
  sourceDescription: string,
  sourceFrom: string,
  amount: number,
  sourceCategory: number,
  period: number,
  misc: any,
}

/**
 * custom input event bundle.
 */
export type customInputEventBundle = React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>;