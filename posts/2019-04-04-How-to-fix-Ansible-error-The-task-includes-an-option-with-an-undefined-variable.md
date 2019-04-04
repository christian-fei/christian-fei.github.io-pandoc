---
title: How to fix Ansible error "The task includes an option with an undefined variable"
date: 2019-04-04
---

Got the following error when running my playbook, with a newly installed external role:

```
fatal: [51.38.181.216]: FAILED! => {"msg": "The task includes an option with an undefined variable. The error was: 'ansible_distribution' is undefined\n\nThe error appears to have been in '.../tasks/main.yml': line 1, column 3, but may\nbe elsewhere in the file depending on the exact syntax problem.\n\nThe offending line appears to be:\n\n\n- debug:\n  ^ here\n"}
```

After some "research" / googling, I finally *understood* why this was happening.

### get your facts straight

In this case the variable missing can be read from the stacktrace above: `ansible_distribution`.

It never happened to me that a variable wasn't available, and ansible_distribution seemed pretty much like a standard ansible variable..

So I quickly debugged the variables with the following command, that essentially runs the `setup` module (with the `-m` option) and spits out a whole bunch of *collected* variables (read **gathered**).

```
ansible -u root -i hosts.production -m setup www.xxx.yyy.zzz
```

After a short break it hit me: it seems the variables are not gathered.

And in fact, in the playbook there was the option `gather_facts` set to false..

By default, Ansible gathers all the facts about the host. For more info check out the [official documentation](https://docs.ansible.com/ansible/devel/modules/gather_facts_module.html).

---

To fix it, simply remove the line from the playbook or set it to True (which is the default value):

```
  gather_facts: False
```
