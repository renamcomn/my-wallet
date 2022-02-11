import React from 'react';
import ContentHeader from '../../components/ContentHeader';
import FinancialCard from '../../components/FinancialCard';
import SelectInput from '../../components/SelectInput';
import { Container, Content } from './styles';

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
            <Content>
                <FinancialCard 
                    cardColor='#313862'
                    tagColor='#E44C4E'
                    title='Conta de Luz'
                    subtitle='10/02/2022'
                    amount='R$ 130'
                />
            </Content>
        </Container>
    )
}

export default List;