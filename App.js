import React, { Component } from 'react';
import { Text, StyleSheet, Button, View, TextInput, numeric, TouchableHighlight,  } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';

//Nur Ain Binti Ishak (1810052)
export default class PayrollSystem extends Component {
  constructor() {
    super();

    this.state = {
      hours: '',
      rate: '',
      salary: '',
      epf: '',
      netsalary: '',
      tableHead: ['Name', 'Days Worked', 'Hours Worked', 'Pay Rate', 'Gross Salary', 'Deduct', 'Net Salary'],
      tableName: ['Afiq', 'Ain', 'Iman', 'Syamina', 'Jannah'],
      
//Muhammad Afiq Bin Munir (1818931) , Nurul Ain Syamina binti Noorafandi (1814584)
      tableData: [
        ['20',
        <TextInput style={[{marginRight: 10}]} placeholder='hours'  onChangeText={(hours) =>
          this.setState({hours})}/>, 
        <TextInput style={[{marginRight: 10}]} placeholder=' rate' onChangeText={(rate) =>
          this.setState({rate})}/>,
        <TextInput style={[{marginRight: 10}]} placeholder='salary'  onChangeText={(salary) =>
            this.setState({salary})}/>, 
        <TextInput style={[{marginRight: 10}]} placeholder=' epf' onChangeText={(epf) =>
            this.setState({epf})}/>, 
        <TextInput style={[{marginRight: 10}]} placeholder=' netsalary' onChangeText={(netsalary) =>
              this.setState({netsalary})}/>], 
        
        ['22',         
        <TextInput style={[{marginRight: 10}]} placeholder='hours'  onChangeText={(hours) =>
            this.setState({hours})}/>, 
          <TextInput style={[{marginRight: 10}]} placeholder=' rate' onChangeText={(rate) =>
            this.setState({rate})}/>,
          <TextInput style={[{marginRight: 10}]} placeholder='salary'  onChangeText={(salary) =>
              this.setState({salary})}/>, 
          <TextInput style={[{marginRight: 10}]} placeholder=' epf' onChangeText={(epf) =>
              this.setState({epf})}/>, 
          <TextInput style={[{marginRight: 10}]} placeholder=' netsalary' onChangeText={(netsalary) =>
                this.setState({netsalary})}/>], 

        ['22',         
        <TextInput style={[{marginRight: 10}]} placeholder='hours'  onChangeText={(hours) =>
            this.setState({hours})}/>, 
          <TextInput style={[{marginRight: 10}]} placeholder=' rate' onChangeText={(rate) =>
            this.setState({rate})}/>,
          <TextInput style={[{marginRight: 10}]} placeholder='salary'  onChangeText={(salary) =>
              this.setState({salary})}/>, 
          <TextInput style={[{marginRight: 10}]} placeholder=' epf' onChangeText={(epf) =>
              this.setState({epf})}/>, 
          <TextInput style={[{marginRight: 10}]} placeholder=' netsalary' onChangeText={(netsalary) =>
                this.setState({netsalary})}/>], 

        ['18',         
        <TextInput style={[{marginRight: 10}]} placeholder='hours'  onChangeText={(hours) =>
            this.setState({hours})}/>, 
          <TextInput style={[{marginRight: 10}]} placeholder=' rate' onChangeText={(rate) =>
            this.setState({rate})}/>,
          <TextInput style={[{marginRight: 10}]} placeholder='salary'  onChangeText={(salary) =>
              this.setState({salary})}/>, 
          <TextInput style={[{marginRight: 10}]} placeholder=' epf' onChangeText={(epf) =>
              this.setState({epf})}/>, 
          <TextInput style={[{marginRight: 10}]} placeholder=' netsalary' onChangeText={(netsalary) =>
                this.setState({netsalary})}/>],  

        ['18',         
        <TextInput style={[{marginRight: 10}]} placeholder='hours'  onChangeText={(hours) =>
            this.setState({hours})}/>, 
          <TextInput style={[{marginRight: 10}]} placeholder=' rate' onChangeText={(rate) =>
            this.setState({rate})}/>,
          <TextInput style={[{marginRight: 10}]} placeholder='salary'  onChangeText={(salary) =>
              this.setState({salary})}/>, 
          <TextInput style={[{marginRight: 10}]} placeholder=' epf' onChangeText={(epf) =>
              this.setState({epf})}/>, 
          <TextInput style={[{marginRight: 10}]} placeholder=' netsalary' onChangeText={(netsalary) =>
                this.setState({netsalary})}/>],   
        ]
    }
  }

//Iman Nurzawani Binti Osman (1814246)
  updateSalary(){
    this.setState({salary: this.state.hours * this.state.rate});
  } 
//Nurul Jannah Binti Hussain (1811252)
  updateEPF(){
    this.setState({epf: this.state.salary * 0.11 });
  } 
//Nurul Jannah Binti Hussain (1811252)
  updateNetSalary(){
    this.setState({netsalary: this.state.salary - this.state.epf});
  } 
 
  render() {
    const state = this.state;
    return (

//Nur Ain Binti Ishak (1810052) , Iman Nurzawani Binti Osman (1814246) , Nurul Jannah Binti Hussain (1811252)

      <View style={styles.container}>
        <Text style={{ fontSize: 40 }}>Payroll System</Text>
        <Table borderStyle={{borderWidth: 1}}>
          <Row data={state.tableHead} flexArr={[4, 4, 4, 4, 4, 4, 4]} style={styles.head} textStyle={styles.text}/>
          <TableWrapper style={styles.wrapper}>
            <Col data={state.tableName} style={styles.name} heightArr={[28,28]} textStyle={styles.text}/>
            <Rows data={state.tableData} flexArr={[2, 2, 2, 2, 2, 2]} style={styles.row} textStyle={styles.text} />             
          </TableWrapper>
        </Table>

        <View style={styles.button}>
        <Button color="blue" title="Calculate Salary" onPress={()=>this.updateSalary()} />
          <Text> {`Salary: ${this.state.salary}`}</Text>
             <Button color="red" title="Calculate EPF" onPress={()=>this.updateEPF()} />
              <Text>{`EPF: ${this.state.epf}`}</Text> 
              <Button color="green" title="Net Salary" onPress={()=>this.updateNetSalary()} />
              <Text>{`NetSalary: ${this.state.netsalary}`}</Text>
        </View>
      </View>
    )
  }
}

//Nurul Ain Syamina binti Noorafandi (1814584)

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: {  height: 40,  backgroundColor: '#f1f8ff'  },
  wrapper: { flexDirection: 'row' },
  name: { flex: 2, backgroundColor: '#f6f8fa' },
  row: {  height: 28  },
  text: { textAlign: 'center' },
  numBox: {
    fontSize: 15,
    textAlign: "center" },
  button: {
      width: "30%",
      //height: 10 
    },
});
