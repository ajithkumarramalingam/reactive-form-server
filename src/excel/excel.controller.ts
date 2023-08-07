import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import * as exceljs from 'exceljs';

@Controller('excel')
export class ExcelController {
  @Get('download')
  async downloadExcel(@Res() res: Response) {
    const data: any[] = [
      { id: 1, name: 'John Doe', age: 30 },
      { id: 2, name: 'Jane Smith', age: 25 },
      { id: 3, name: 'Michael Johnson', age: 40 },
    ];

    const workbook = new exceljs.Workbook();
    const worksheet = workbook.addWorksheet('Sheet1');

    const headers = Object.keys(data[0]);
    worksheet.addRow(headers);

    data.forEach((rowData) => {
      const values = Object.values(rowData);
      worksheet.addRow(values);
    });

    res.setHeader('Content-Disposition', 'attachment; filename=table_data.xlsx');
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');

    return workbook.xlsx.write(res)
      .then(() => {
        res.end();
      });
  }
}
