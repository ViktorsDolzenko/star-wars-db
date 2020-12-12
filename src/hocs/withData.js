import React from "react";
import {Spinner} from "../components/spinner/spinner";
import {ErrorIndicator} from "../components/error-indicator/error-indicator";

const withData = (View) => {
    return class extends React.Component {

        state = {
            data: null,
            hasError: false,
            loading: false
        };

        componentDidUpdate(prevProps) {
            if(this.props.getData !== prevProps.getData) {
                this.update();
            }
        }

        componentDidMount() {
        this.update();
        }

        update(){
            this.setState({
                loading: true
            })

           this.props.getData()
                .then((data) => {
                    this.setState({
                        data,
                        loading: false
                    });
                });
        }

        componentDidCatch() {
            this.setState({
                hasError: true
            })
        }

        render() {
            const {data, hasError, loading} = this.state;

            if (loading) {
               return <Spinner/>
            }

            if (hasError) {
                return <ErrorIndicator/>
            }

            if (!data) {
                return (
                    <ul className="list-group-flush list">
                        <Spinner/>
                    </ul>
                )
            }

            return <View {...this.props} data={data}/>

        }
    }
}

export default withData;
