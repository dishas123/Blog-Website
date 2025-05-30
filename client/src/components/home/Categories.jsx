import { Button, Table, TableHead, TableRow, TableCell, TableBody, styled } from '@mui/material';
import { Link, useSearchParams } from 'react-router-dom';

import { categories } from '../../constants/data';


const StyledTable = styled(Table)`
    border: none;
    background: transparent;
`;

const StyledTableRow = styled(TableRow)`
    border: none;
    background: transparent;
`;

const StyledTableCell = styled(TableCell)`
    border: none !important;
    background: transparent;
`;

const StyledButton = styled(Button)`
    margin: 20px;
    width: 85%;
    background:rgb(16, 133, 243);
    box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.2);
    color: #fff;
    text-decoration: none;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
    font-size: 1.1rem; /* or try 18px, 1.2rem, etc. */
    font-weight: 500;
`;

const Categories = () => {
    const [searchParams] = useSearchParams();
    const category = searchParams.get('category');

    return (
        <>
            <Link to={`/create?category=${category || ''}`} style={{ textDecoration: 'none' }}>
                <StyledButton variant="contained">Create Blog</StyledButton>
            </Link>

            <StyledTable>
                <TableHead>
                    <StyledTableRow>
                        <StyledTableCell>
                            <StyledLink to={"/"}>
                                All Categories
                            </StyledLink>
                        </StyledTableCell>
                    </StyledTableRow>
                </TableHead>
                <TableBody>
                    {
                        categories.map(category => (
                            <StyledTableRow key={category.id}>
                                <StyledTableCell>
                                    <StyledLink to={`/?category=${category.type}`}>
                                        {category.type}
                                    </StyledLink>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))
                    }
                </TableBody>
            </StyledTable>
        </>
    )
}

export default Categories;
