import { Button } from '../../components/button';

const Board = () => {
    return (
        <>
            <div>
                <Button primary>Primary Button</Button>
                <Button>Secondary Button</Button>
                <Button primary size="small">
                    Primary Button
                </Button>
                <Button size="large">Secondarcvy Button</Button>
            </div>
        </>
    );
};
export default Board;
