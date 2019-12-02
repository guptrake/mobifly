export interface iRecociliation {
    reconciliation: [
        {
            data: {
                input_file1: string,
                input_file2: string,
                output_file: string,
                previousrun: boolean
            },
            key_columns: {
                file1_key_columns_no: number[],
                file2_key_columns_no: number[],
                file1_group_column_no: number[],
                file2_group_column_no: number[],
                group_flag: boolean,
                nonkey_truefalse_flag: boolean
            },
            nonkey_value_columns: [
                {
                    file1_column_no: number,
                    file2_column_no: number,
                    neg_tolerance_limit: string,
                    pos_tolerance_limit: string,
                    output_column_heading: string
                }
            ],
            nonkey_truefalse_columns: [
                {
                    file1_column_no: number,
                    file2_column_no: number,
                    output_column_heading: string
                }
            ],
            probable_match: {
                file1_column_no: number[],
                file2_column_no: number[],
                percentage: number,
                output_file: string,
                probable_flag: boolean
            }
        }
    ]
}

