import React from 'react';
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import { Container } from './styles';

const List: React.FC = () => {
    const options = [
        {value: 'Janeiro', label: 'Janeiro'},
        {value: 'Fevereiro', label: 'Fevereiro'},
        {value: 'Março', label: 'Março'},
    ]
    return (
        <Container>
            <ContentHeader
                title='Saídas'
                lineColor='#E44C4E'
            >
                <SelectInput options={options} />
            </ContentHeader>
        </Container>
    )
}

export default List;