import Header from '../../../components/Header';
import { EducationContainer, TimeLine, GraduationContainer, Graduation, GraduationData, InstitutionLogo, MiddleCircle, MiddleTimeLine } from './styles';

const Education = () => {

    const graduations = {
        'University' : {
            'institution' : '????',
            'institution-logo' : '',
            'time' : '2022 - ????',
            'side' : 'left',
        },
        'High School' : {
            'institution' : 'Escola Sesi Anísio Teixeira',
            'institution-logo' : require('../../../assets/images/sesi.png'),
            'time' : '2019 - 2021',
            'side' : 'right',
        },
    }

    return (
        <EducationContainer>
            <Header title='Education' subtitle='In progress...'/>
            <TimeLine>
                {
                    Object.keys(graduations).map((graduation) => (
                        <GraduationContainer key={graduation}>
                            <Graduation className={graduations[graduation]['side']}>
                                <GraduationData>
                                    <h6>{`${graduations[graduation]['time']}`}</h6>
                                    <h4>{graduation}</h4>
                                    <h5>{graduations[graduation]['institution']}</h5>
                                </GraduationData>
                                <InstitutionLogo 
                                    src={graduations[graduation]['institution-logo']}
                                />
                                <MiddleCircle/>
                            </Graduation>
                            <MiddleTimeLine/>
                        </GraduationContainer>
                    ))
                }       
            </TimeLine>
        </EducationContainer>
    );    
}

export default Education;

/*
*/